import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { PauseCircleIcon } from "./PauseCircleIcon ";
import { courses } from "../../../_Details";
import { BiSolidPurchaseTag } from "react-icons/bi";

import img from "../../assets/register.jpg"

export default function Courses() {

    return (
        <>
            <div className="p-6" id="courses">
                <h1 className="uppercase text-4xl my-12 text-start font-mono leading-inherit text-blue-500">courses</h1>
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50"
                    shadow="lg"
                >
                    <CardBody>
                        <div className="grid grid-cols-2 gap-16 space-y-8 iPhone4and4S:grid-cols-1 items-center justify-center p-4">
                            {courses.map((course, index) => (
                                    <div className="flex flex-wrap gap-6" key={course.id}>
                                        <div className="flex items-start" key={course.id}>
                                            <Image src={course.courseImage} alt="" className="h-[300px] object-cover" width={300}/>
                                            {/* <video controls muted className="h-60 w-64 object-contain">
                                                <source src={vid}/>
                                            </video> */}
                                        </div>
                                        <div className="flex flex-col h-full max-w-[300px]">
                                                <h1 className="font-medium text-xl text-blue-500 self-start mb-3">{course.courseName}</h1>
                                                <small>{course.courseDetails}</small>
                                                <Button variant="shadow" className="bg-green-700 hover:bg-green-800 mt-4 w-44 text-md">Get Course <BiSolidPurchaseTag className="text-lg"/></Button>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}
