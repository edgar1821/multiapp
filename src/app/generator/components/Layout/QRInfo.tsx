import InfoArticle from "./InfoArticle";
function QRInfo() {
  return (
    <section className="w-lvw flex justify-center">
      <div
        className="
                ml-0 
                mr-0 
                flex 
                w-full
                flex-col 
                justify-start
                rounded-lg
                border-2 
                border-generator-primary 
                bg-generator-white-100
                p-4
                md:ml-10
                md:mr-10
                md:w-1/2"
      >
        <InfoArticle title="Que es un codigo QR?">
          <>
            <p>
              Un código QR es como un código de barras que ves en los
              productos de una tienda, pero en lugar de líneas, es una
              cuadrícula de cuadritos. La cosa especial sobre un código
              QR es que puede guardar mucha más información que un
              código de barras normal.
            </p>
            <p>
              Cuando escaneas un código QR con tu teléfono o tablet
              usando una app especial (justo como la cámara es una app
              que usa tu teléfono), la app puede leer la información
              que está guardada en el código QR. Esta información puede
              ser un enlace a un sitio web, un número telefónico, un
              mensaje de texto, o cualquier otra cosa que alguien haya
              decidido guardar en un código QR.
            </p>
            <p>
              Así que básicamente, un código QR es como un pequeño
              paquete de información que puedes leer fácilmente con tu
              teléfono para acceder a lo que sea que esté guardado
              dentro. Es muy útil para compartir cosas como sitios web,
              contactos, o incluso para realizar pagos rápidos.
            </p>
          </>
        </InfoArticle>
        <InfoArticle title="Que puedo hacer con el acceso a una red Wifi en un codigo QR?">
          <ul className="list-disc pl-4 text-justify">
            <li>
              Conexión rápida a WiFi: Puedes generar un código QR que
              contenga la información de tu red WiFi (nombre de la red
              y contraseña). Cuando alguien escanea este código con su
              dispositivo, automáticamente se conecta a tu red WiFi sin
              necesidad de ingresar la contraseña manualmente. Esto es
              útil para compartir la conexión a internet en eventos,
              oficinas o lugares públicos de una manera conveniente y
              segura.
            </li>
            <li>
              Acceso a la red en dispositivos móviles: En algunos
              casos, especialmente en dispositivos móviles, puede ser
              complicado ingresar una contraseña larga o compleja para
              conectarse a una red WiFi. Al colocar un código QR con la
              información de la red, los usuarios pueden simplemente
              escanear el código y conectarse fácilmente sin la
              molestia de ingresar la contraseña.
            </li>
            <li>
              Configuración de dispositivos inteligentes: Muchos
              dispositivos inteligentes, como impresoras, cámaras de
              seguridad, altavoces inteligentes, entre otros, pueden
              requerir una conexión a una red WiFi durante la
              configuración inicial. Al proporcionar un código QR con
              los detalles de la red, se facilita y agiliza el proceso
              de configuración para los usuarios.
            </li>
          </ul>
        </InfoArticle>
        <InfoArticle title="Que utilidad le puedo dar a mi numero en whatsapp en un codigo QR?">
          <ul className="list-disc pl-4 text-justify">
            <li>
              Agregar contactos fácilmente: Si deseas que otras
              personas te agreguen a sus contactos de WhatsApp, puedes
              generar un código QR que contenga tu número de teléfono
              asociado con tu cuenta de WhatsApp. Al escanear este
              código, los usuarios pueden agregar tu número a su lista
              de contactos sin necesidad de ingresar manualmente el
              número.
            </li>
            <li>
              Compartir tu número de WhatsApp en tarjetas de
              presentación: Al incluir un código QR que contenga tu
              número de WhatsApp en tus tarjetas de presentación, haces
              que sea más fácil para las personas contactarte
              directamente a través de WhatsApp. Esto puede facilitar
              la comunicación y el networking, especialmente en
              entornos profesionales.
            </li>
            <li>
              Facilitar la comunicación en eventos o reuniones: Si
              estás organizando un evento o una reunión, puedes
              imprimir un código QR con tu número de WhatsApp y
              colocarlo en la información o material promocional del
              evento. Esto permite a los participantes comunicarse
              contigo fácilmente para realizar preguntas, solicitar
              información adicional o brindar retroalimentación.
            </li>
            <li>
              Ofrecer soporte al cliente: Si tienes un negocio y
              utilizas WhatsApp como plataforma de atención al cliente,
              puedes proporcionar un código QR que dirija a tu número
              de WhatsApp para que los clientes puedan comunicarse
              contigo directamente para realizar consultas, realizar
              pedidos o recibir asistencia.
            </li>
          </ul>
        </InfoArticle>
        <InfoArticle title="Que utilidad le puedo dar a una geolocalizacion en un codigo QR?">
          <ul className="list-disc pl-4 text-justify">
            <li>
              Direcciones de eventos: Si estás organizando un evento en
              un lugar específico, puedes incluir la geolocalización
              del lugar en un código QR. Los asistentes pueden escanear
              el código para obtener instrucciones precisas sobre cómo
              llegar al lugar del evento utilizando aplicaciones de
              mapas.
            </li>
            <li>
              Promoción de negocios locales: Los negocios locales
              pueden utilizar la geolocalización en códigos QR para
              dirigir a los clientes a su ubicación exacta. Esto puede
              ser útil para atraer a los clientes a visitar una tienda
              física o un restaurante al proporcionar direcciones
              precisas a través de aplicaciones de mapas.
            </li>
            <li>
              Puntos de interés turístico: En destinos turísticos, los
              códigos QR con geolocalización pueden ofrecer a los
              visitantes información detallada sobre puntos de interés
              cercanos, como monumentos históricos, museos o
              atracciones turísticas. Los visitantes pueden escanear el
              código para obtener indicaciones y detalles sobre cada
              lugar.
            </li>
            <li>
              Seguimiento de activos: En entornos empresariales o de
              logística, la geolocalización en códigos QR puede
              utilizarse para rastrear la ubicación de activos físicos,
              como paquetes de envío, equipos o vehículos. Al escanear
              el código, los empleados pueden acceder a la ubicación
              actual del activo en tiempo real.
            </li>
          </ul>
        </InfoArticle>
      </div>
    </section>
  );
}
export default QRInfo;
