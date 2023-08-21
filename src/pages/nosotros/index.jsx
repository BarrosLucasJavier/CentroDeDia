import manos from '../../assets/images/manos.png'
import styles from './nosotros.module.css'

const Nosotros = () => {
    return (
        <main>
            <section className={styles.nosotrosContainer}>
                <h2>Nosotros</h2>
                <div className={styles.infoContainer}>
                    <img src={manos}/>
                    <div className={styles.textInfo}>
                        <p>Seis años de compromiso y dedicación en el abordaje integral y acompañamiento a personas con padecimiento subjetivo y/o consumo problemático. 
                        Desde su creación, este dispositivo se ha convertido en un espacio de apoyo para la comunidad, brindando una atención especializada y contención emocional a quienes lo necesitan.</p>
                        <p>Ubicado en la calle Entre Ríos N° 450 del barrio Otaño, el Centro de Día “La Novena” es parte esencial del servicio de Salud Mental del hospital local. Su papel como complemento de la red de atención de salud ha sido fundamental en la atención a pacientes con problemas de salud mental y consumo en Plaza Huincul y Cutral Co.</p>
                        <p>Durante seis años de trayectoria, el Centro ha destacado por contar con un equipo interdisciplinario de salud comprometido y dedicado. Psicólogos, trabajadores sociales, psiquiatras y otros especialistas han trabajado en conjunto para ofrecer diversos talleres.</p>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </main>
    );
}

export default Nosotros;
