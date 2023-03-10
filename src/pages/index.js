import Cards from '@/components/Cards'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'





export default function Home(data) {
  console.log(data.data)
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <Box width={"100%"} h="100%" display="flex" flexWrap={"wrap"} flexDirection="row" justifyContent={"space-evenly"}>
{
  data.data.map((el)=>(<Cards key={el.id} ele={el}/>))
}
   </Box>
    </>
  )
}
export async function getStaticProps() {
  let res= await axios.get(`https://mockserver-rny6.onrender.com/movies`);
  let data=res.data;
  return {
    // Passed to the page component as props
    props: { data: data },
  }
}