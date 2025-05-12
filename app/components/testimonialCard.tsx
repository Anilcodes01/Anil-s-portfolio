import Image from "next/image"

export default function TestimonialCard() {
    const star = '/star.png'

    const testimonials = [
        {
            clientName: 'SilverDesignerd',
            clientLogo: '/silver.webp',
            clientCountry: '/italy.png',
            stars: '5',
            review: 'Very nice thank you so much! Very talented!!!! I ADVICE ABSOLUTELY!!!! 💯',
            timeline: '28 Apr - 6 May'
        },
        {
            clientName: 'Codernerd',
            clientLogo: '/silver.webp',
            clientCountry: '/italy.png',
            stars: '4.5',
            review: 'Really nice working with him, know about his industry and products he have worked on. nice communication, everything nice. 100% recommended 👏',
            timeline: '28 Apr - 6 May'
        },
        {
            clientName: 'SilverDesignerd',
            clientLogo: '/silver.webp',
            clientCountry: '/italy.png',
            stars: '5',
            review: 'Very nice thank you so much! Very talented!!!! I ADVICE ABSOLUTELY!!!! 💯',
            timeline: '28 Apr - 6 May'
        },
        {
            clientName: 'SilverDesignerd',
            clientLogo: '/silver.webp',
            clientCountry: '/italy.png',
            stars: '4',
            review: 'Really nice working with him, know about his industry and products he have worked on. nice communication, everything nice. 100% recommended 👏',
            timeline: '28 Apr - 6 May'
        },
    ]

    return (
        <div className="grid grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="border border-gray-400 p-5 rounded-2xl">
                    <div className="flex gap-4 items-center">
                        <Image 
                            src={testimonial.clientLogo} 
                            alt={testimonial.clientName} 
                            width={48} 
                            height={48} 
                            className="h-12 w-12 rounded-full" 
                        />
                        <h2 className="text-2xl">
                            {testimonial.clientName}
                        </h2>
                        <Image 
                            src={testimonial.clientCountry} 
                            alt={testimonial.clientName} 
                            width={16} 
                            height={16} 
                            className="h-4 w-4" 
                        />
                    </div>
                    <hr className="mt-2 mb-4" />

                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => {
                                const starValue = i + 1;
                                const rating = parseFloat(testimonial.stars);
                                
                                return (
                                    <Image
                                        key={i}
                                        src={star}
                                        alt="star"
                                        width={16}
                                        height={16}
                                        className={`h-4 w-4 ${starValue <= rating ? 'opacity-100' : 
                                            (starValue - 0.5 <= rating ? 'opacity-50' : 'opacity-20')}`}
                                    />
                                );
                            })}
                        </div>
                        <span className="text-sm">
                            {testimonial.stars} ({testimonial.timeline})
                        </span>
                    </div>

                    <div className="mt-4">
                        <p className="text-gray-400">
                            {testimonial.review}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}