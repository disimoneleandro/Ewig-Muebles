import '../../styles/NovedadesItem.css'

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return(
        <div className="novedades">
            <div className="card-novedades">
            <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body-novedades">
                    <h5 className="card-title-novedades">{title}</h5>
                    <p className="card-text-novedades">{subtitle}</p>
                    <div className="card-p-novedades" dangerouslySetInnerHTML={{ __html: body }}></div>
                </div>
            </div>
        </div>

    );
}

export default NovedadItem;