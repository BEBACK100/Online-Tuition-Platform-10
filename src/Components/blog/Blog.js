import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold my-15 py-10'>There are some question and Answer here-------</h1>

            <div className="collapse w-80 mx-auto rounded-2xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                    <h1><span className='text-3xl  font-bold'>Question(01):</span>What is CORS? </h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1 className='mx-auto'>
                        <span className='text-2xl text-yellow-100 font-bold'>Answer:</span> Cross-Origin Resource Sharing (CORS) is a technology used by websites to make web browsers relax the Same Origin Policy, enabling cross-domain communication between different websites. It's frequently used by web APIs in particular, but in a modern complex website it can turn up anywhere. It’s widely understood that certain CORS configurations are dangerous, but some associated subtleties and implications are easily misunderstood. In this post I’ll show how to critically examine CORS configurations from a hacker’s perspective, and steal bitcoins.
                    </h1>
                </div>
            </div>
            <div className="collapse w-80 mx-auto rounded-2xl mt-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-pink-700 text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content text-2xl">
                    <h1><span className='text-3xl  font-bold'>Question(02):</span>Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div className="collapse-content bg-gray-300 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1 className='mx-auto'>
                        <span className='text-2xl text-yellow-100 font-bold'>Answer:</span>Firebase is a mobile app platform with integrated, unified client libraries in various mobile programming languages. Firebase's different backend-as-a-service (BaaS) features help you develop high-quality apps, grow your user base, and earn more money.

                        There are so many options to implement Authentication like-Auth0, okta etc….

                    </h1>
                </div>
            </div>
            <div className="collapse w-80 mx-auto my-6 rounded-2xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                    <h1><span className='text-3xl  font-bold'>Question(03):</span>How does the private route work? </h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1 className='mx-auto'>
                        <span className='text-2xl text-yellow-100 font-bold'>Answer:</span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </h1>
                </div>
            </div>
            <div className="collapse w-80 mx-auto rounded-2xl mb-10">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-600 text-primary-content peer-checked:bg-lime-500 peer-checked:text-secondary-content text-2xl">
                    <h1><span className='text-3xl  font-bold'>Question(04):</span>What is Node? How does Node work?</h1>
                </div>
                <div className="collapse-content bg-orange-400 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
                    <h1 className='mx-auto'>
                        <span className='text-2xl text-yellow-100 font-bold'>Answer:</span> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                        <span className='text-black text-2xl '>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</span>

                    </h1>
                </div>
            </div>

        </div>
    );
};

export default Blog;