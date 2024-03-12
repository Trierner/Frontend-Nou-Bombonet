import React from "react";
import { Link } from 'react-router-dom';

function Sidebarmenu() {
    return (
        <div className="sidebar-menu">
            <ul className="menu">
                <li className="elements">
                    <div>Dashboard</div>
                    <ul>
                        <li><Link to="/e-commerce">E-Commerce</Link></li>
                        <li><Link to="/banco">Banco</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>Aplicaciones</div>
                    <ul>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/calendario">Calendario</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/archivos">Archivos</Link></li>
                        <li><Link to="/correo">Correo</Link></li>
                        <li><Link to="/tareas">Lista de tareas</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>UI Kit</div>
                    <ul>
                        <li><Link to="/formulario">Diseño de formulario</Link></li>
                        <li><Link to="/añadir">Añadir</Link></li>
                        <li><Link to="/etiqueta">Etiqueta flotante</Link></li>
                        <li><Link to="/inválido">Estado inválido</Link></li>
                        <li><Link to="/boton">Boton</Link></li>
                        <li><Link to="/tabla">Tabla</Link></li>
                        <li><Link to="/lista">Lista</Link></li>
                        <li><Link to="/arbol">Arbol</Link></li>
                        <li><Link to="/panel">Panel</Link></li>
                        <li><Link to="/overlay">Overlay</Link></li>
                        <li><Link to="/imágenes">Imágenes</Link></li>
                        <li><Link to="/menú">Menú</Link></li>
                        <li><Link to="/mensajes">Mensajes</Link></li>
                        <li><Link to="/archivo">Archivo</Link></li>
                        <li><Link to="/gráfico">Gráfico</Link></li>
                        <li><Link to="/otros">Otros</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>Bloques Principales</div>
                    <ul>
                        <li><Link to="/bloques">Bloques Libres</Link></li>
                        <li><Link to="/todos">Todos</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>Utilidades</div>
                    <ul>
                        <li><Link to="/iconos">Iconos Principales</Link></li>
                        <li><Link to="/colores">Colores</Link></li>
                        <li><Link to="/plantilla">Plantilla</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>Páginas</div>
                    <ul>
                        <li><Link to="/landing">Landing</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/crud">CRUD</Link></li>
                        <li><Link to="/timeline">Timeline</Link></li>
                        <li><Link to="/factura">Factura</Link></li>
                        <li><Link to="/nosotros">Sobre nosotros</Link></li>
                        <li><Link to="/ayuda">Ayuda</Link></li>
                        <li><Link to="/found">Not Found</Link></li>
                        <li><Link to="/empty">Empty</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contacta">Contacta</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>E-Commerce</div>
                    <ul>
                        <li><Link to="/vista">Vista del producto</Link></li>
                        <li><Link to="/lista">Lista de productos</Link></li>
                        <li><Link to="/nuevo">Nuevo producto</Link></li>
                        <li><Link to="/carrito">Carrito</Link></li>
                        <li><Link to="/pago">Formulario de pago</Link></li>
                        <li><Link to="/historial">Historial de pedidos</Link></li>
                        <li><Link to="/resumen">Resumen de pedidos</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>Gestión de usuarios</div>
                    <ul>
                        <li><Link to="/cantidad">Cantidad</Link></li>
                        <li><Link to="/crear">Crear</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>Jerarquía</div>
                    <ul>
                        <li><Link to="/submenu1">Submenu 1</Link></li>
                        <li><Link to="/submenu2">Submenu 2</Link></li>
                    </ul>
                </li>
                <li className="elements">
                    <div>Empezar</div>
                    <ul>
                        <li><Link to="/compra">Compra ahora</Link></li>
                        <li><Link to="/documentación">Documentación</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarmenu;