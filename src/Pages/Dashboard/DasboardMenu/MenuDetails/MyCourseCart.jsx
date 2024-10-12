import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const MyCourseCart = ({ course }) => {
    const { startCourseId, courseImg, approvedByAdmin } = course; //added new field : approved by admin


    return (
        <div disabled className="">
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
                <figure>
                    <img src={courseImg} alt="course" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{course.course}</h2>
                    <div className="flex justify-between">
                        <div className="w-full">
                            {approvedByAdmin ? (
                                <Link to={`/my-course/${startCourseId}`}>
                                    <button className="btn text-white bg-gradient-to-r w-full font-semibold text-[16px] from-cyan-500 to-blue-500">
                                        <samp className='text-xl'><BiCategoryAlt /></samp> Start Course
                                    </button>
                                </Link>

                            ) : (
                                <button className="btn text-white bg-gradient-to-r w-full font-semibold text-[16px] from-cyan-500 to-blue-500 cursor-not-allowed">
                                    <samp className='text-xl'><BiCategoryAlt /></samp> Course Pending...
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCourseCart;
