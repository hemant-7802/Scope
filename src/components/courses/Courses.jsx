import { Card, CardBody, } from "@nextui-org/react";
import { PauseCircleIcon } from "./PauseCircleIcon ";
import { courses } from "../../../_Details";
import vid from "../../assets/vid1.mp4"

export default function Courses() {

    return (
        <>
            <div className="p-6" id="courses">
                <h1 className="uppercase text-5xl my-12 text-center">our <span className="text-blue-500">courses</span></h1>
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50"
                    shadow="lg"
                >
                    <CardBody>
                        <div className="grid grid-cols-2 gap-16 space-y-8 iPhone4and4S:grid-cols-1 items-center justify-center p-4">
                            {courses.map((course, index) => (
                                <>
                                    <div className="flex gap-6 ">
                                        <div className="relative col-span-6 md:col-span-4" key={course.id}>
                                            <video controls muted className="h-48 w-64 object-cover">
                                                <source src={vid}/>
                                            </video>
                                        </div>
                                        <div className="flex flex-col col-span-6 md:col-span-8">
                                            <div>
                                                <h1 className="font-medium text-lg text-blue-500">{course.courseName}</h1>
                                                <small>{course.courseDetails}</small>
                                                {/* <Button
                                                    className="w-auto h-auto data-[hover]:bg-foreground/10"
                                                    radius="full"
                                                    variant="light"
                                                    onPress={() => setPlay((e) => !e)}
                                                >
                                                    <PauseCircleIcon size={54} />
                                                </Button> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}
