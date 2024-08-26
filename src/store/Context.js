import React from 'react'
import appLogo from '../images/amplichat.png'

import appleStoreBadge from '../images/apple_store_badge.jpg'
import googlePlayBadge from '../images/google_play_badge.png'

// endorsement images
import coverImage from '../images/amplichat_iphones_two.png'

// section images
import guitar from '../images/guitar.jpg'
import event_phones from '../images/event_phones.jpg'
import foggy_blue from '../images/foggy_blue.jpg'
import purple_phones from '../images/purple_phones.jpg'
import purple_light from '../images/purple_light.avif'
import concert_classic from '../images/concert_classic.jpeg'

export const initialState = {
    appURL: '#',

    appLogo: appLogo,
    appName: 'Code Wrestling',

    coverTitle: 'Welcome to Code Wrestling - Your Source for Exceptional Education and Career-Related Content',
    coverText: 'We are on a mission to revolutionize the way you learn and stay updated in the fields of engineering, technology, and careers.',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://www.youtube.com/@CodeWrestling',
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: 'https://t.me/codewrestling',

    coverImage: coverImage,

    endorsementTitle: `What Sets Us Apart?`,
    sectionList: [
        {
            'title': `In-Depth Knowledge`,
            'text': `We go beyond the surface, providing comprehensive insights into engineering principles and the latest technology trends.`,
            'image': guitar,
        },
        {
            'title': `Practical Scenarios`,
            'text': `We don't just teach theory; we bring it to life with real-world, practical examples.`,
            'image': event_phones,
        },
        {
            'title': `Accessible Learning`,
            'text': `Our content is available to all, breaking down the barriers to acquiring detailed knowledge.`,
            'image': foggy_blue,
        },
        {
            'title': `Passion for Technology`,
            'text': `We love diving into the complexities of machine learning and emerging technologies.`,
            'image': purple_phones,
        },
    ],

        endorsementTitle2: `Who We Serve?`,

        sectionList2: [
            {
                'title': `College Students`,
                'text': `We're here to supplement your coursework with depth and clarity.`,
                'image': purple_light,
            },
            {
                'title': `Aspiring Professionals`,
                'text': `We help individuals of all backgrounds reach their career goals.`,
                'image': concert_classic,
            }
        ],

}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
