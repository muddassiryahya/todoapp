import Style from './style.module.css';

export default async function Shop({ params }) {

    const ids = (await params).ids;

    console.log(ids);

    return (
        <div>
            <h2 className={Style.heading}>Shop Page</h2>
            <br />
            <h3>{ids}</h3>
        </div>
    )
}
