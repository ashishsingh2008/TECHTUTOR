import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "Our friendly and dedicated team is always ready to help you.",
    details: "Info@TechTour.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "We’d love to welcome you to our headquarters.",
    details:
      "IIT (ISM) Aquamarin Hostel P Block , Dhanbad, Jharkhand-826004",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8:00 PM to 5:00 PM",
    details: "+91 8174083875",
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails