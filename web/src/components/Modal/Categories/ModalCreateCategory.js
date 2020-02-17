import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import swal from "sweetalert";

import "./styles.css";

const ModalCreateCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const NewCategory = async () => {
    console.log(name);

    if (name) {
      const response = await api.post(`/categories`, {
        name: name
      });

      console.log(response);
      if (response.status === 200) {
        console.log("sucesso");
        swal("Sucesso", "Categoria adicionada com sucesso!!", "success").then(
          value => {
            document.location.reload(true);
          }
        );
      } else {
        swal("Error", "Erro ao criar a categoria, tente novamente.", "error");
      }
    } else {
      setError(true);
      // alert("sd")
    }
  };

  return (
    <div className="modal fade" id="newCategoryModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <div id="newcategory">Nova Categoria</div>
            </div>
          </div>

          <div className="modal-body">
            {error && (
              <p style={{ color: "#FF0000" }}>
                {" "}
                Nome da categoria obrigatório!
              </p>
            )}
            <form className="modal-form" id="createCategory" method="post">
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Nome:
                </label>
                <div className="col-sm-8">
                  <input
                    type="name"
                    className="form-control"
                    id="inputName"
                    value={name}
                    onChange={e => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="submit"
              form="createCategory"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={NewCategory}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateCategory;
