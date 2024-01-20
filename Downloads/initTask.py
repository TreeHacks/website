import streamlit as st
from transformers import pipeline

# Initialize the model
generator = pipeline('text-generation', model='gpt2')

st.title('Text Generation with GPT-2')

# Text input
user_input = st.text_input('Enter your text:', 'She worked as a')

# Slider for temperature
temperature = st.slider('Select generation temperature:', 0.1, 1.0, 0.7)

# Generate text button
if st.button('Generate Text'):
    # Generate 5 continuations
    generated_texts = generator(user_input, max_length=50, num_return_sequences=5, temperature=temperature)
    
    # Display each generated text
    for i, text in enumerate(generated_texts):
        st.write(f'Continuation {i+1}: {text["generated_text"]}')

