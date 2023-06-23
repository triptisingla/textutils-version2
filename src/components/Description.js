import React from 'react'

export default function Description({mode}) {
    return (
        <div className='container mt-3'>
            <p className={`text-center text-${mode==='light'?'dark':'light'}`}>
                TextUtils  is a platform that allows users to create, edit, format written content and convert speech to text. This can range from simple word processing tasks such as writing and editing essays, articles, or blog posts to more complex projects such as creating technical documents or novels. The site typically provides a user-friendly interface that enables users to perform various actions such as typing, cutting, pasting, formatting, and saving documents.

                Some text editing sites may offer additional features such as collaboration tools, spell-checking, grammar-checking, thesaurus, and translation tools. Users may also be able to customize the formatting of their documents.

                Overall, a text editing site provides a convenient and efficient way for individuals or teams to create, edit, and manage written content in a digital format.

            </p>
            <p className={`text-center text-${mode==='light'?'dark':'light'}`}> <strong >Navigate to the navbar links to use the editor.</strong></p>
        </div >
    )
}
