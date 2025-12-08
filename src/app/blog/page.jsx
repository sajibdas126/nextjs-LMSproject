
"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const id = params?.CourseDetails;

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setCourse(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <p className="p-10 text-xl text-center">Loading Blog...</p>;

  if (!course)
    return (
      <p className="p-10 text-xl text-center text-red-500">
        Course Not Found
      </p>
    );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-3">{course.description}</p>
    </div>
  );
};

export default Page;
