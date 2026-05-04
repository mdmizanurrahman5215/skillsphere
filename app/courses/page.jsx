"use client";
import React from 'react'
import CoursesPage from '../../pages/CoursesPage'
import { useAuth } from "@/context/AuthContext";


const Courses = () => {
  const {courseData } = useAuth();

  return (
    <div>
      <CoursesPage coursesData={courseData} />
    </div>
  )
}

export default Courses
