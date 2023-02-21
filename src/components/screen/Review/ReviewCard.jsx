import React from 'react';

const demoText ="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aperiam veniam est beatae fugiat at, quod quis doloremque voluptates non tenetur nihil voluptatum quibusdam a voluptas omnis velit, ut sint necessitatibus, eos placeat accusantium quidem! Accusantium nulla officia voluptatibus nisi repellat neque. Fugit perspiciatis id voluptatem alias mollitia placeat cumque dolore exercitationem. Odit mollitia alias error repudiandae minima laborum quaerat perspiciatis ipsam soluta eius cupiditate voluptas."
const ReviewCard = () => {
    return (
        <>
            <div className="p-3 rounded-2xl mt-5 border ">
                    <p className="space-x-2">
                      <span className="font-medium">Mohin Uddin</span>
                      <span className="text-gray-500">On</span>
                      <span className="text-gray-700 font-medium">21 Jan 2023</span>
                    </p>
                    {/* rating section */}
                    <div className="">
                      <div className="flex space-x-2 items-center ">
                        <div className="-mt-1">
                          {Array.from({ length: 4 }).map((_, idx) => (
                            <svg
                              key={idx}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#FECA38"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 inline-block text-[#FECA38]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ))}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#D3D3D3"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 inline-block text-[#D3D3D3]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h2 className="text-xl uppercase font-semibold text-gray-600">PRODUCT IS GOOD QUALITY</h2>
                      <div>
                      <p className="text-gray-600 text-sm mt-2 hidden lg:block">
                        {demoText}
                      </p>
                       <div className='block lg:hidden'>
                          <p>{demoText.slice(0, 150)}... <span className="text-primary-600 font-semibold">More</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
        </>
    );
};

export default ReviewCard;