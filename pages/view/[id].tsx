'use client';
import Editor from 'components/editor/editor';
import { buildHead, fetchShader, useShader } from 'lib/view';

export async function getServerSideProps(context) {
    const id = Number(context.params.id);
    if (Number.isNaN(id)) return { notFound: true };
    return { props: { id, shader: await fetchShader(id) } };
}

export default function Index(props) {
    useShader(props);
    return (
        <div>
            {props.shader ? buildHead(props.shader) : null}
            <Editor />
        </div>
    );
}
