import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ThumbsUpIcon, ChevronDownIcon } from 'lucide-react';
interface ReviewsSectionProps {
  rating: number;
  totalReviews: number;
}
export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  rating,
  totalReviews
}) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const ratingDistribution = [{
    stars: 5,
    count: 156,
    percentage: 67
  }, {
    stars: 4,
    count: 52,
    percentage: 22
  }, {
    stars: 3,
    count: 18,
    percentage: 8
  }, {
    stars: 2,
    count: 5,
    percentage: 2
  }, {
    stars: 1,
    count: 3,
    percentage: 1
  }];
  const reviews = [{
    id: 1,
    author: 'Sarah Kirkson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    date: '2 days ago',
    comment: 'Absolutely delicious! The crust was perfectly crispy and the toppings were fresh. Best pizza I have had in NYC!',
    helpful: 24,
    verified: true
  }, {
    id: 2,
    author: 'Mike Chen',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    date: '1 week ago',
    comment: 'Amazing quality and great value. The delivery was super fast too. Highly recommend!',
    helpful: 18,
    verified: true
  }, {
    id: 3,
    author: 'Emily Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Very good pizza, authentic Italian taste. Only minor complaint is I wished there was more basil.',
    helpful: 12,
    verified: false
  }, {
    id: 4,
    author: 'David Kim',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
    date: '3 weeks ago',
    comment: 'This is my go-to pizza place now. Consistent quality and the staff is always friendly.',
    helpful: 31,
    verified: true
  }];
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5
  }} className="bg-white rounded-3xl p-6 md:p-8 shadow-md mb-12">
      <h2 className="heading-font text-3xl font-bold mb-6">Customer Reviews</h2>
      {/* Rating Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-100">
        {/* Overall Rating */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="text-5xl font-bold text-primary mr-3">
              {rating}
            </span>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className={`${i < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-gray-300'}`} />)}
              </div>
              <p className="text-sm text-textLight">{totalReviews} reviews</p>
            </div>
          </div>
        </div>
        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map(item => <div key={item.stars} className="flex items-center gap-3">
              <span className="text-sm font-medium text-textDark w-8">
                {item.stars}★
              </span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full transition-all duration-500" style={{
              width: `${item.percentage}%`
            }} />
              </div>
              <span className="text-sm text-textLight w-12 text-right">
                {item.count}
              </span>
            </div>)}
        </div>
      </div>
      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews.map((review, index) => <motion.div key={review.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4,
        delay: index * 0.1
      }} className="pb-6 border-b border-gray-100 last:border-0">
            <div className="flex items-start gap-4">
              <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-textDark">
                        {review.author}
                      </h4>
                      {review.verified && <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                          Verified
                        </span>}
                    </div>
                    <p className="text-sm text-textLight">{review.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < review.rating ? 'fill-secondary text-secondary' : 'text-gray-300'}`} />)}
                  </div>
                </div>
                <p className="text-textLight mb-3 leading-relaxed">
                  {review.comment}
                </p>
                <button className="flex items-center text-sm text-textLight hover:text-primary transition-colors">
                  <ThumbsUpIcon size={16} className="mr-2" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          </motion.div>)}
      </div>
      {/* Show More Button */}
      {!showAllReviews && reviews.length > 2 && <button onClick={() => setShowAllReviews(true)} className="w-full mt-6 flex items-center justify-center text-primary font-medium py-3 rounded-xl border-2 border-primary/20 hover:bg-primary/5 transition-colors">
          Show All {reviews.length} Reviews
          <ChevronDownIcon size={20} className="ml-2" />
        </button>}
    </motion.div>;
};