import React, { useEffect, useRef, useState } from 'react';
import { Star, Building2, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const initialReviews = [
    {
        id: 1,
        author: {
            name: "Ron Holmes",
            title: "CTO",
            company: "Redium Capital",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        },
        rating: 5,
        title: "Salesforce Development for R&D Financing Company",
        description: "Digiflex.ai seamlessly integrates with your team, making it feel like they are an extension of your internal workforce. They consistently deliver results on time and within budget, driving impactful changes like replacing unstable systems with robust solutions. Their collaborative approach ensures that you see them not just as a service provider, but as a true partner in success...",
        category: "Custom Software Development",
        budget: "$200,000 to $999,999"
    },
    {
        id: 2,
        author: {
            name: "Allan Fraser",
            title: "Director of Information Technology",
            company: "Milrose Consultants",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        },
        rating: 5,
        title: "Full Salesforce Migration & Dev for Consulting firm",
        description: "At Digiflex.ai, we pride ourselves on understanding your vision. When you say, 'We need this,' we take it from there and deliver results seamlessly. Our standout expertise in Salesforce and meticulous business analysis drive transformative workflow improvements. By leveraging agile methodologies and cutting-edge technologies, we ensure continuous enhancements that align with your evolving business needs...",
        category: "IT Consulting & SI",
        budget: "$1,000,000 - $9,999,999"
    },
    {
        id: 3,
        author: {
            name: "Ekaterina Geta",
            title: "Senior Project Manager",
            company: "Simplifield",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        },
        rating: 5,
        title: "Salesforce Integration & Analytics for IT Company",
        description: "Their reaction time was great and the quality of work was impressive. Their team resolved complex legacy code in addition to handling new development. The project progressed on schedule, taking slightly less than a year, enabling the partner to focus on custom...",
        category: "IT Consulting & SI",
        budget: "Confidential"
    },
    {
        id: 4,
        author: {
            name: "Michael Chen",
            title: "Head of Technology",
            company: "TechFlow Solutions",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        },
        rating: 5,
        title: "Enterprise Software Implementation",
        description: "The team demonstrated exceptional professionalism and technical expertise throughout the project. Their ability to understand our complex requirements and deliver solutions ahead of schedule was remarkable. The implementation has significantly improved our operational efficiency...",
        category: "Enterprise Software",
        budget: "$500,000 to $1,000,000"
    },
    {
        id: 5,
        author: {
            name: "Sarah Williams",
            title: "COO",
            company: "Innovate Financial",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        },
        rating: 5,
        title: "Digital Transformation Initiative",
        description: "Outstanding delivery on our digital transformation project. The team's deep understanding of our industry combined with their technical expertise resulted in a solution that exceeded our expectations. Their agile approach and regular communication made the entire process smooth...",
        category: "Digital Transformation",
        budget: "$750,000 to $1,500,000"
    }
];

const Reviews = () => {
    const [reviews, setReviews] = useState(initialReviews);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef(null);
    const loader = useRef(null);

    const loadMore = () => {
        
        if (loading) return;
        
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const newReviews = [...reviews, ...initialReviews.map(review => ({
                    ...review,
                    id: review.id + reviews.length
                }))
            ];
            setReviews(newReviews);
            setPage(page + 1);
            setLoading(false);
        }, 1000);
    };

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 10
            );
        }
    };

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        
        if (container) {
            const scrollAmount = 400 + 24; // card width + gap
            const newScrollLeft = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        
        const scrollContainer = scrollContainerRef.current;
        
        if (!scrollContainer) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            checkScrollButtons();
            // Load more when we're 300px from the end
            if (scrollWidth - (scrollLeft + clientWidth) < 300 && !loading) {
                loadMore();
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        checkScrollButtons();
        return () => scrollContainer.removeEventListener('scroll', handleScroll);

    }, [loading] );

    return (
        <div className="my-12 bg-white text-black px-4 py-12 w-11/12 mx-auto">
            <div className="max-w-[90%] mx-auto">
                
                <h1 className="text-5xl font-semibold text-[#1A2E6F] mb-16 text-center">Reviews</h1>
                
                <div className="relative">
                {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gray-200 p-2 rounded-full z-10 transition-opacity ${
                        canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gray-200 p-2 rounded-full z-10 transition-opacity ${
                        canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                        style={{
                        scrollBehavior: 'smooth',
                        WebkitOverflowScrolling: 'touch',
                        }}
                    >
                        {
                            reviews.map((review) => (
                                
                                <div
                                    key={review.id}
                                    className="flex-none w-[400px] snap-start"
                                >
                                    <div className="bg-gray-800 rounded-lg p-6 h-full transition-transform hover:scale-[1.02]">
                                        <div className="flex items-start gap-4 mb-4">
                                            <img
                                                src={review.author.avatar}
                                                alt={review.author.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg text-white font-semibold truncate">{review.author.name}</h3>
                                                <p className="text-sm text-white truncate">
                                                    {review.author.title}, {review.author.company}
                                                </p>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {
                                                    [...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h4 className="text-lg text-white font-semibold mb-2 line-clamp-2">{review.title}</h4>
                                            <p className="text-sm text-white line-clamp-3">{review.description}</p>
                                        </div>
                                        
                                        <div className="flex flex-col gap-2 text-xs text-white">
                                            <div className="flex items-center gap-2">
                                                <Building2 className="w-4 h-4" />
                                                <span className="truncate">{review.category}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Tag className="w-4 h-4" />
                                                <span className="truncate">{review.budget}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            loading && (
                                <div className="flex-none w-[400px] flex items-center justify-center">
                                    <div className="text-gray-400">Loading more reviews...</div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Reviews;
