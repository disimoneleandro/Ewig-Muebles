import {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

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
      <h3>Novedades</h3>
      {loading ? (
        <p>Cargando...</p>
        ) : (
          novedades.map(item => <NovedadItem key={item.id}
          title={item.titulo}
          subtitle={item.subtitulo}
          imagen={item.image}
          body={item.cuerpo} />)
      )}
    </div>
  )
}

export default NovedadesPage;