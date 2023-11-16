import Banner from '@/components/Banner';
import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';
import Skill from '@/components/Skill';
import React from 'react'

function index({ data }) {
    // console.log(data);
    return (
        <>
            <Blog />
            <Skill />
            <Navbar />
            <Banner data={data} />
        </>

    )
}
export async function getServerSideProps(context) {
    const { data } = await import('../data/Data')
    const { index } = context.query;


    const slugs = data.map((i) => {
        return i.slug;
    })


    if (slugs.includes(index)) {
        const pageData = data.find((i) => i.slug === index)
        return {
            props: {
                data: pageData
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}
export default index
