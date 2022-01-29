import Head from "next/head"

interface pageMeta {
    metaCanonicalSlug: string
    metaTitle: string
    metaDescription: string
}

function PageMeta({ pageMeta } : { pageMeta : pageMeta } ) {
    return (
        <>
            <Head>
                {pageMeta &&  
                    <title>{pageMeta.metaTitle}</title>
                }
                {pageMeta &&  
                    <link rel='canonical' href={pageMeta.metaCanonicalSlug}></link>
                }
                {pageMeta &&  
                    <meta name='description' content={pageMeta.metaDescription}></meta>
                }
            </Head>
        </>
    )
}

export default PageMeta