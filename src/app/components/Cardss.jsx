import React from 'react'
import Card from './Card'
import datas from './datas.json'

const Cardss = () => {

  return (
    <div className='sm:grid sm:auto-rows-min md:grid-cols-2 lg:grid-cols-4 mx-10 mb-24 box-border lg:'>
      <Card
      key={datas[0].id}
      img={datas[0].img}
      pimg={datas[0].pimg}
      name={datas[0].name}
      likes={datas[0].likes}
      />
      <Card
      key={datas[1].id}
      img={datas[1].img}
      pimg={datas[1].pimg}
      name={datas[1].name}
      likes={datas[1].likes}
      />
      <Card
      key={datas[2].id}
      img={datas[2].img}
      pimg={datas[2].pimg}
      name={datas[2].name}
      likes={datas[2].likes}
      />
      <Card
      key={datas[3].id}
      img={datas[3].img}
      pimg={datas[3].pimg}
      name={datas[3].name}
      likes={datas[3].likes}
      />
      <Card
      key={datas[4].id}
      img={datas[4].img}
      pimg={datas[4].pimg}
      name={datas[4].name}
      likes={datas[4].likes}
      />
      <Card
      key={datas[5].id}
      img={datas[5].img}
      pimg={datas[5].pimg}
      name={datas[5].name}
      likes={datas[5].likes}
      />
      <Card
      key={datas[6].id}
      img={datas[6].img}
      pimg={datas[6].pimg}
      name={datas[6].name}
      likes={datas[6].likes}
      />
      <Card
      key={datas[7].id}
      img={datas[7].img}
      pimg={datas[7].pimg}
      name={datas[7].name}
      likes={datas[7].likes}
      />
      <Card
      key={datas[8].id}
      img={datas[8].img}
      pimg={datas[8].pimg}
      name={datas[8].name}
      likes={datas[8].likes}
      />
            <Card
      key={datas[9].id}
      img={datas[9].img}
      pimg={datas[9].pimg}
      name={datas[9].name}
      likes={datas[9].likes}
      />
      <Card
      key={datas[10].id}
      img={datas[10].img}
      pimg={datas[10].pimg}
      name={datas[10].name}
      likes={datas[10].likes}
      />
      <Card
      key={datas[11].id}
      img={datas[11].img}
      pimg={datas[11].pimg}
      name={datas[11].name}
      likes={datas[11].likes}
      />
    </div>
  )
}

export default Cardss
