import Layout from '../../components/layout'
import { getAllPostsIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.data}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths(){
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }){
  // fetch necessary data for dhe blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}