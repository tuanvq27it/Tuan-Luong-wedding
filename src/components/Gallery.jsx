import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

export default function Gallery(){
  return (
    <section className="my-6">
      <h3 className="text-center text-xl mb-4">Chapter Three</h3>
      <div className="grid grid-cols-2 gap-3">
        <img src={img1} alt="" className="rounded shadow" />
        <img src={img2} alt="" className="rounded shadow" />
        <img src={img3} alt="" className="rounded shadow col-span-2" />
      </div>
    </section>
  )
}
