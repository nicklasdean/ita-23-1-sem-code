console.log("hello");
const OPENAI_API_KEY = 'KEY HERE'; // Replace with your actual API key

const button = document.querySelector("button");
const input = document.querySelector('input');
const spanGeneratedStory = document.querySelector("span.generated-story");
const loadingSpan = document.querySelector('span.loading');
const imageSpan = document.querySelector('span.image');

button.addEventListener("click", function() {
    const storyDescriptionFromUser = input.value;
    loadingSpan.classList.remove('hidden');

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: `Please write a very short short story (max 30 words!) about ${storyDescriptionFromUser}. Please respond with both the text and an image prompt using JSON in the following format
            {
              "text": "TEXT_OF_STORY"
              "image_description": "DESCRIPTION_OF_IMAGE"
            }
            `
            }]
        })
    })
        .then(response => response.json())
        .then(function(data) {
            const storyData = data.choices[0].message.content;
            const jsonStory = JSON.parse(storyData);
            const story = jsonStory.text;
            const imageDescription = jsonStory.image_description;

            spanGeneratedStory.innerText = story;
            loadingSpan.classList.add('hidden');

           addImageToStory(imageDescription);
        })

});

function addImageToStory(imageDescription) {
    fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "dall-e-3",
                    prompt: imageDescription,
                    n: 1,
                    size: "1024x1024"
                })
            })
                .then(response => response.json())
                .then(data => {
                    const generatedImageUrl = data.data[0].url;
                    const img = document.createElement('img');
                    img.setAttribute('src', generatedImageUrl);
                    imageSpan.insertAdjacentElement("afterend", img)

                })
                .catch(error => console.error('Error:', error));

}
