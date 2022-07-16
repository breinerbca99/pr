import { Component, OnInit } from '@angular/core';
import { Servicio } from '../models/servicio';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  servicios: Servicio[] = [{
    nombre: 'Backend',
    descripcion: 'Experiencia con requerimientos en el sector bancario, medico y publico',
    puntos: ['Exportar casos de uso en aplicaciones funcionales.','Diseñar, construir y mantener el código de Java.','Mantener la organización y la automatización.'
        ,'Pruebas unitarias (Mockito y Junit)'],
    img:'assets/imagenes/lenguajes/backend.png',
    icono:'../assets/imagenes/skills/java-brands.svg',
    estilo:'width: 30px !important; height: 40px;margin-top: -5px;'
  }, {
    nombre: 'Frontend',
    descripcion: 'Experiencia con requerimientos en el sector medico y publico',
    puntos: ['Maquetacion de sitios web','Adaptacion de estilos web (Cc3,Bootstrap,Angular Material)','Conocimiento solido de Javascript y Typescript'
          ,'Experiencia con Angular, routes,proteger rutas, auth'],
    img:'assets/imagenes/lenguajes/frontend.png',
    icono:'../assets/imagenes/skills/js-brands.svg',
    estilo:'width: 30px !important; height: 30px;'
  }, {
    nombre: 'Cloud , devops',
    descripcion: 'Despliegue de aplicaciones dockerizadas y uso eficiente de la nube',
    /* https://www.redeszone.net/tutoriales/redes-cable/ingeniero-sistemas-nube/ */
    puntos: ['Conceptos de configuracion en arquitecturas Cloud','Conceptos de gestion en el acceso y la seguridad',
          'Conocimientos en Arquitectura de Aws','Integracion Aws Spring Angular Docker Kubernetes'],
    img:'assets/imagenes/lenguajes/cloud1.png',
    icono:'../assets/imagenes/skills/cloud-solid.svg',
    estilo:'width: 45px !important; height: 30px;margin-top: -4px;'
  }, {
    nombre: 'Base de datos',
    descripcion: 'Integracion de proyectos con base de datos Sql y NoSql',
    puntos: ['Control de acceso, basado en roles','Desnormalizacion del negocio en entidades de negocio','Experiencia en base de datos Sql (Oracle)',
        'Experiencia en base de datos noSql (MongoDb)'],
    img:'assets/imagenes/lenguajes/base1.png',
    icono:'../assets/imagenes/skills/database.png',
    estilo:'width: 30px !important; height: 30px;margin-top: -4px;'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
