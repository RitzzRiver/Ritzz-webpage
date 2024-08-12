const sketchPricesvalue = [5000, 10000, 20000];
const colorPricesvalue = [15000, 20000, 25000];
const renderPricesvalue = [25000, 30000, 35000];
const actualUSD = 4085.60;

// PreferencesView
export const likes = [
    'Plastic arts',
    '🛐 ROGUELIKES 🛐',
    '😺 C A T S 😺',
    'Japanese stuff',
    'Cottagecore',
    'Sandbox games',
    'Goofy CO-OP games',
    'Indie games',
    'Tech stuff',
    'Nature',
    'Photography'
]

export const dislikes = [
    "AI, if you're into that GET OUT OF MY SIGHT.",
    'Violence',
    'Contamination',
    'Loud noises',
    'Actual reggaeton songs',
    'Sports',
    'Hot seasons * dies at 26° *',
    'Homophobia and transphobia (EQUAL RIGHTS)'
]

//EN TERMS
export const generalTOS_EN = [
    'I DO NOT SUPPORT NFT OR IA, IF YOU ARE GOING TO USE MY ART FOR IT YOU BETTER NOT COMMISSION ME.',
    'YOU CAN REQUEST ADVANCES ON YOUR ORDER AT ANY TIME.',
    'YOU CAN POST YOUR COMMISSION, AS LONG AS YOU GIVE CREDITS.'
]

export const workflowTOS_EN = [
    'I START WORKING ONCE 50% OF THE ORDER HAS BEEN PAID.',
    'IF YOU HAVE A DEADLINE, PLEASE LET ME KNOW IN ADVANCE, OTHERWISE I WILL WORK WITH THE STANDARD DELIVERY TIME.',
    'ORDERS ARE DELIVERED WITHIN 4 WORKING DAYS.',
    'YOU HAVE 5 FREE CORRECTIONS ON THE ORDER.',
    'ADDITIONAL CORRECTIONS HAVE A COST OF $10.000.',
    'I REQUIRE A VISUAL REFERENCE OF THE CHARACTER, DIGITAL BEING PREFERRED.',
    'THE REFERENCES IN TRADITIONAL MUST BE CLEAR AND WITH THEIR COLORS IN DIGITAL.',
    'I DO NOT ACCEPT REFERENCES OR SHADED DRAWINGS.',
    "I CAN MAKE MINOR MODIFICATIONS TO THE DRAWING, BUT DON'T MAKE ME DO IT ALL OVER AGAIN."
]

export const PaymentsAndRefoundsTOS_EN = [
    'ALL PRICES ARE IN USD.',
    'PAYMENTS ARE MADE VIA PAYPAL ONLY.',
    'PLEASE WAIT FOR MY APPROVAL BEFORE MAKING THE PAYMENT.',
    'PAYMENTS MUST BE MADE WITHIN 48 HOURS, OTHERWISE THE ORDER WILL BE CANCELLED.',
    'IF YOU CHANGE YOUR MIND PLEASE LET ME KNOW AS SOON AS POSSIBLE FOR A REFUND.',
    'ONCE THE PIECE HAS BEEN STARTED NO REFUNDS CAN BE REQUESTED.'
]

//ES TERMS
export const generalTOS_ES = [
    'NO APOYO LOS NFT NI LAS IA, SÍ VAS A USAR MI ARTE PARA ELLO MEJOR NO ME COMISIONES.',
    'PUEDES SOLICITAR EN CUALQUIER MOMENTO AVANCES DE TU PEDIDO.',
    'PUEDES POSTEAR TU COMISIÓN, SIEMPRE Y CUANDO DES CRÉDITOS.'
]

export const workflowTOS_ES = [
    'EMPIEZO A TRABAJAR UNA VEZ EL 50% DEL PEDIDO HA SIDO PAGADO.',
    'SI TIENES UNA FECHA LÍMITE, POR FAVOR, AVISA CON ANTICIPACIÓN, DE RESTO TRABAJARÉ CON EL PLAZO DE ENTREGA ESTÁNDAR.',
    'LOS PEDIDOS SE ENTREGAN EN UN PLAZO DE 4 DÍAS HÁBILES.',
    'TIENES 5 CORRECCIONES GRATUITAS SOBRE EL PEDIDO.',
    'LAS CORRECCIONES ADICIONALES TIENEN UN COSTO DE $10.000',
    'REQUIERO UNA REFERENCIA VISUAL DEL PERSONAJE, DIGITAL SIENDO PREFERIDO.',
    'LAS REFERENCIAS EN TRADICIONAL DEBEN SER CLARAS Y CON SUS COLORES EN DIGITAL.',
    'NO ACEPTO COMO REFERENCIAS DIBUJOS SOMBREADOS.',
    'PUEDO HACER PEQUEÑAS MODIFICACIONES AL DIBUJO, PERO NO ME HAGAS HACERLO TODO DE NUEVO.'
]

export const PaymentsAndRefoundsTOS_ES = [
    'TODOS LOS PRECIOS ESTÁN EN PESOS COLOMBIANOS.',
    'POR FAVOR ESPERAR POR MI APROVACION ANTES DE REALIZAR EL PAGO.',
    'LOS PAGOS TIENEN UN PLAZO DE 48 HORAS PARA REALIZARLOS, EN CASO CONTRARIO, EL PEDIDO SERÁ CANCELADO.',
    'SI CAMBIAS DE PARECER PORFAVOR AVISAME LO ANTES POSIBLE PARA UN REEMBOLSO.',
    'UNA VEZ QUE LA PIEZA FUE EMPEZADA NO SE PUEDEN PEDIR REEMBOLSOS.'
]

// social media links
export const links = {

    twitter: {
        link: "https://twitter.com/RitzzRiver",
    },
    github: {
        link: "https://www.github.com/RitzzRiver",
    },
    mail: {
        link: "mailto:ritzzriver@gmail.com",
    },
    telegram: {
        link: "https://t.me/StarlightDreamer56",
    },
}

// Commisions table prices
export const sketchPricesCOP = [
    'Headshot: $' + sketchPricesvalue[0],
    'Halfbody: $' + sketchPricesvalue[1],
    'Fullbody: $' + sketchPricesvalue[2],
]
export const colorPricesCOP = [
    'Headshot: $' + colorPricesvalue[0],
    'Halfbody: $' + colorPricesvalue[1],
    'Fullbody: $' + colorPricesvalue[2],
]
export const renderPricesCOP = [
    'Headshot: $' + renderPricesvalue[0],
    'Halfbody: $' + renderPricesvalue[1],
    'Fullbody: $' + renderPricesvalue[2],
]

export const sketchPricesUSD = [
    'Headshot: $' + Math.round(sketchPricesvalue[0]/actualUSD),
    'Halfbody: $' + Math.round(sketchPricesvalue[1]/actualUSD),
    'Fullbody: $' + Math.round(sketchPricesvalue[2]/actualUSD),
]
export const colorPricesUSD = [
    'Headshot: $' + Math.round(colorPricesvalue[0]/actualUSD),
    'Halfbody: $' + Math.round(colorPricesvalue[1]/actualUSD),
    'Fullbody: $' + Math.round(colorPricesvalue[2]/actualUSD),
]
export const renderPricesUSD = [
    'Headshot: $' + Math.round(renderPricesvalue[0]/actualUSD),
    'Halfbody: $' + Math.round(renderPricesvalue[1]/actualUSD),
    'Fullbody: $' + Math.round(renderPricesvalue[2]/actualUSD),
]