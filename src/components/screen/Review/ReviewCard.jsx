import ReactStars from "react-stars";

const ReviewCard = ({review}) => {
    const {name,rating ,date,review_title, comments} = review
    return (
        <>
            <div className="p-3 rounded-2xl mt-5 border ">
                    <p className="space-x-2">
                      <span className="font-medium">{name}</span>
                      <span className="text-gray-500">On</span>
                      <span className="text-gray-700 font-medium">{date}</span>
                    </p>
                    {/* rating section */}
                    <div className="">
                      <ReactStars count={5} size={25} value={rating} edit={false}></ReactStars>
                    </div>
                    <div className="mt-3">
                      <h2 className="text-xl uppercase font-semibold text-gray-600">{review_title}</h2>
                      <div>
                      <p className="text-gray-600 text-sm mt-2 hidden lg:block">
                        {comments}
                      </p>
                       <div className='block lg:hidden'>
                          <p>{comments.slice(0, 150)}... <span className="text-primary-600 font-semibold">More</span></p>
                        </div>
                      </div>
                    </div>
            </div>
        </>
    );
};

export default ReviewCard;