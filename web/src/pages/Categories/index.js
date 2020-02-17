import React from 'react';
import Navbar from "../../components/Navbar";
import ModalCreateCategory from "../../components/Modal/Categories/ModalCreateCategory";
import Bar from "../../assets/categories/bar.png";
import Boutique from "../../assets/categories/boutique.png";
import Restaurante from "../../assets/categories/restaurante.png";
import Informatica from "../../assets/categories/informatica.png";
import Manutencao from "../../assets/categories/manutencao.png";
import Salao from "../../assets/categories/salao.png";
import Calcados from "../../assets/categories/calcados.png";
import Cosmeticos from "../../assets/categories/cosmeticos.png";
import Personal from "../../assets/categories/personal.png";
import Eletronicos from "../../assets/categories/eletronicos.png";
import Alternativa from "../../assets/categories/alternativa.png";
import Aluguel from "../../assets/categories/aluguel.png";
import { FaSign } from 'react-icons/fa';

import './styles.css';

export default function Categories() {
  
  return (
    <div id="page-categories">
      <Navbar />
      <ModalCreateCategory />
      <div className="page-content p-5" id="content">

      <h3 className="text-white" id="sidebarCollapse"><FaSign size={20}/> Categorias</h3>
      
      <div className="btn-new-category">
        <button type="button" className="btn btn-success" id="new-category"
        data-dismiss="modal" data-toggle="modal" data-target="#newCategoryModal">Nova categoria</button>
      </div>

      <div className="separator"></div>
      
      <div className="card-list">
          <div className="row">

          <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Bares</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Bar} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Vestuário</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Boutique} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Restaurantes</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Restaurante} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Informática</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Informatica} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Técnicos</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Manutencao} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Barbearia</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Salao} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Calçados</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Calcados} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Cosméticos</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Cosmeticos} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Personal</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Personal} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Eletrônicos</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Eletronicos} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Alternativas</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Alternativa} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card" id="card-margin">
                <div className="card-body">
                  <h6 className="card-title" id="category-title">Aluguel</h6>
                  <p className="card-text">
                  </p>
                  <div className="category-photo">
                    <img src={Aluguel} alt="name"></img>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


/* Material Table 

const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

<MaterialTable
      title="Categorias cadastradas"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    */