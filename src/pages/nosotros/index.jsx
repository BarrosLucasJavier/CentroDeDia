import manos from '../../assets/images/manos.png'
import user1 from '../../assets/images/users/users1.jpeg'
import user2 from '../../assets/images/users/users2.jpeg'
import user3 from '../../assets/images/users/users3.jpeg'
import styles from './nosotros.module.css'

const Nosotros = () => {
    return (
        <main>
            <section className={styles.nosotrosContainer}>
            <div className={styles.titulos}>
                <h2 >Nosotros</h2>
            </div>
                <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <div className={styles.uno}>
                        <img  src={user3}/>
                    </div>
                    <div className={styles.dos}>
                        <img src={user2}/>
                    </div>
                    <div className={styles.tres}>
                        <img src={user1}/>
                    </div>
                </div>
                    <div className={styles.textInfo}>
                        <p>Somos usuarias/os del Centro de día que elaboramos juguetes didácticos.</p>
                        <p>Participamos de ferias en donde vendemos nuestros productos, también realizamos juguetes a pedido y en nuestro catálogo podrán encontrar los juguetes disponibles.</p>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <img src={manos}/>
                    <div className={styles.textInfo}>
                        <p>Seis años de compromiso y dedicación en el abordaje integral y acompañamiento a personas con padecimiento subjetivo y/o consumo problemático. 
                        Desde su creación, este dispositivo se ha convertido en un espacio de apoyo para la comunidad, brindando una atención especializada y contención emocional a quienes lo necesitan.</p>
                        <p>Ubicado en la calle Entre Ríos N° 450 del barrio Otaño, el Centro de Día “La Novena” es parte esencial del servicio de Salud Mental del hospital local. Su papel como complemento de la red de atención de salud ha sido fundamental en la atención a pacientes con problemas de salud mental y consumo en Plaza Huincul y Cutral Co.</p>
                        <p>Durante seis años de trayectoria, el Centro ha destacado por contar con un equipo interdisciplinario de salud comprometido y dedicado. Psicólogos, trabajadores sociales, acompañantes terapeúticos y enfermeros ademas de los talleristas que trabajan en conjunto para ofrecer diversos talleres.</p>
                    </div>
                </div>
            </section>
            <section className={styles.ubicacionContainer}>
                <div className={styles.titulos}>
                    <h2>Encontranos en:</h2>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d775.8391181869264!2d-69.18985273033044!3d-38.93868395509541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDU2JzE5LjMiUyA2OcKwMTEnMjEuMiJX!5e0!3m2!1ses-419!2sar!4v1692627006769!5m2!1ses-419!2sar" width="355" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </main>
    );
}

export default Nosotros;
