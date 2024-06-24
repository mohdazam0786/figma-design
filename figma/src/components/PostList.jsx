import React, { useState } from 'react';
import PostItem from './PostItem';
import RecommendedGroups from './RecommendedGroups'; // Import the RecommendedGroups component

const posts = [
    {
        id: 1,
        type: 'Article',
        title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        author: 'Sarthak Kamra',
        image: 'https://images.unsplash.com/photo-1701623536140-f43eb2f24d60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likes: '1.4k',
        views: '1.4k views'
    },
    {
        id: 2,
        type: 'Education',
        title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        author: 'Sarah West',
        image: 'https://images.unsplash.com/photo-1718978311737-84e744bad193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        likes: '1.4k',
        views: '1.4k views'
    },
    {
        id: 3,
        type: 'Meetup',
        title: 'Finance & Investment Elite Social Mixer @Lujiazui',
        author: 'Pascal Jones',
        image: 'https://images.unsplash.com/photo-1718471480244-57cde007369c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        likes: '1.4k',
        views: '1.4k views'
    },
    {
        id: 4,
        type: 'Job',
        title: 'Software Developer',
        author: 'Joseph Gray',
        image: 'https://images.unsplash.com/photo-1717511140281-52586e5e307d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        likes: '1.4k',
        views: '1.4k views'
    }
];

function PostList() {
    const [userLocation, setUserLocation] = useState('');

    const handleLocationChange = (e) => {
        setUserLocation(e.target.value);
    };

    return (
        <div className="container mx-auto py-6">
            <div className="flex justify-between items-center px-4 mb-4 ml-[200px]">
                <nav className="flex space-x-4">
                    <a href="#" className="text-gray-700 font-semibold">All Posts(32)</a>
                    <a href="#" className="text-gray-700">Article</a>
                    <a href="#" className="text-gray-700">Event</a>
                    <a href="#" className="text-gray-700">Education</a>
                    <a href="#" className="text-gray-700">Job</a>
                </nav>
                <div>
                    <button className="bg-white text-gray-700 py-1 px-4 rounded-md shadow border mr-2">Write a Post</button>
                    <button className="bg-blue-500 text-white py-1 px-4 rounded-md">Join Group</button>
                </div>
            </div>
            <div className="border-t pt-4 flex justify-between items-start">
                <div className="w-[692px] ml-[200px]">
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
                <div className="w-[240px] mr-10">
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-1 rounded-md mr-2"
                            placeholder="Enter your location"
                            value={userLocation}
                            onChange={handleLocationChange}
                        />
                    </div>
                    <RecommendedGroups />
                </div>
            </div>
        </div>
    );
}

export default PostList;
