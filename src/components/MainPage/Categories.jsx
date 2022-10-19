import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/kemeja.png",
      cateName: "Kemeja",
    },
    {
      cateImg: "./images/category/kaos.png",
      cateName: "Kaos",
    },
    {
      cateImg: "./images/category/jaket.png",
      cateName: "Jaket",
    },
    {
      cateImg: "./images/category/celana.png",
      cateName: "Celana",
    },
    {
      cateImg: "./images/category/rok.png",
      cateName: "Rok",
    },
    {
      cateImg: "./images/category/jeans.png",
      cateName: "Jeans",
    },
    // {
    //   cateImg: "./images/category/cat7.png",
    //   cateName: "Health & Beauty",
    // },
    // {
    //   cateImg: "./images/category/cat8.png",
    //   cateName: "Pets",
    // },
    // {
    //   cateImg: "./images/category/cat9.png",
    //   cateName: "Baby Toys",
    // },
    // {
    //   cateImg: "./images/category/cat10.png",
    //   cateName: "Groceries",
    // },
    // {
    //   cateImg: "./images/category/cat11.png",
    //   cateName: "Books",
    // },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
