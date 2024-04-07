import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/NovedadesPage.css'

const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);

  return (
    <div className="div-novedades-page">
        <div className="div-h2-novedades">
          <h2 className="h2-novedades">Proximamente . . . </h2>
        </div>
        <div className="div-tarjetas">
          {loading ? (
          <p>Cargando...</p>
          ) : (
            novedades.map(item => <NovedadItem key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo} />)
          )}
        </div>
    </div>
  )
}

export default NovedadesPage;