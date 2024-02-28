import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { studentsName } from "../../../_Details";

export default function Students() {

    return (
        <div className="p-6" id="about">
            <h1 className="text-center my-12 text-5xl uppercase">our learners</h1>
            <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
                {studentsName.map((sName, index) => (
                    <Card shadow="sm" key={index}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={sName.title}
                                className="w-full object-cover h-[280px]"
                                src={sName.image_url}
                            />
                        </CardBody>
                        <CardFooter className="text-large justify-center">
                            <b>{sName.name}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
