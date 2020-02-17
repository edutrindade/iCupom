import React from 'react';
import {FaTv } from 'react-icons/fa';
import C3Chart from "react-c3js";

import './styles.css';
  
export default function Dashboard() {
  return (
      <div className="page-content p-5" id="content">

      <h3 className="text-white" id="sidebarCollapse"><FaTv size={20}/> Dashboard</h3>
      <div className="separator"></div>

        <div className="card-list">
          <div class="row">

          <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title">Contratos ativos</h6>
                  <p class="card-text">
                  </p>
                  <div className="card-total">52</div>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title">Receita por Pacotes</h6>
                  <p class="card-text">
                    <strong>R$ 1.600,00</strong>
                  </p>
                  <C3Chart
                    style={{ height: "10rem" }}
                    data={{
                      columns: [
                        // colocar aqui o array com as vendas
                        [
                          "mensal",
                          598.50,
                        ],
                        [
                          "semestral",
                          418.60,
                        ],
                        [
                          "anual",
                          398.00,
                        ]
                      ],
                      type: "pie", // default type of chart
                      //groups: [["data2", "data3"]],
                      colors: {
                        mensal: "#DA70D6",
                        semestral: "#6A5ACD",
                        anual: "#3CB371"
                      },
                      names: {
                        // name of each serie
                        mensal: "Mensal: ",
                        semestral: "Semestral: ",
                        anual: "Anual: "
                      }
                    }}
                    axis={{
                      y: {
                        padding: {
                          bottom: 0
                        },
                        show: false,
                        tick: {
                          outer: false
                        }
                      },
                      x: {
                        padding: {
                          left: 0,
                          right: 0
                        },
                        show: false
                      }
                    }}
                    legend={{
                      show: false,
                      position: "middle",
                      
                      inset: {
                        anchor: "top-left",
                        x: 20,
                        y: 8,
                        step: 10
                      }
                    }}
                    tooltip={{
                      format: {
                        title: function (x) {
                          return "";
                        }
                      }
                    }}
                    padding={{
                      
                      left: 40,
                      right: 60
                    }}
                    point={{
                      show: false
                    }}
                  />
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title">Balanço Mensal</h6>
                  <p class="card-text">
                    <strong>Receita x Despesa</strong>
                  </p>
                  <C3Chart
                    style={{ height: "10rem" }}
                    data={{
                      columns: [
                        // colocar aqui o array com as vendas
                        [
                          "receitas",
                          1540
                        ],
                        [
                          "despesas",
                          350
                        ]
                      ],
                      type: "bar", // default type of chart donut
                      //groups: [["receitas", "despesas"]],
                      colors: {
                        receitas: "#008000",
                        despesas: "#FF0000"
                      },
                      names: {
                        // name of each serie
                        receitas: "",
                        despesas: ""
                      }
                    }}
                    axis={{
                      y: {
                        padding: {
                          bottom: 0
                        },
                        show: false,
                        tick: {
                          outer: false
                        }
                      },
                      x: {
                        padding: {
                          left: 0,
                          right: 0
                        },
                        show: false
                      }
                    }}
                    legend={{
                      show: false,
                      position: "middle",
                      padding: 30,
                      inset: {
                        anchor: "top-left",
                        x: 20,
                        y: 8,
                        step: 10
                      }
                    }}
                    tooltip={{
                      format: {
                        title: function (x) {
                          return "";
                        }
                      }
                    }}
                    padding={{
                      bottom: 20
                    }}
                    point={{
                      show: false
                    }}
                  />
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title">Ticket Médio</h6>
                </div>
                <C3Chart
                  style={{ height: "12.5rem" }}
                  data={{
                    columns: [
                      // each columns data
                      ["data", 26.90]
                    ],
                    type: "gauge", // default type of chart
                    colors: {
                      data: "#ffff40"
                    },
                    names: {
                      // name of each serie
                      data: "R$"
                    }
                  }}
                  legend={{
                    show: false, //hide legend
                    position: "bottom",
                    padding: 30,
                    inset: {
                      anchor: "top-left",
                      x: 20,
                      y: 8,
                      step: 10
                    }
                  }}
                  gauge={{
                    min: 0,
                    max: 39.90,
                    units: "R$",
                    label: {
                      format: function (value, ratio) {
                        return value;
                      }
                    }
                  }}
                  padding={{
                    bottom: 40,
                    top: 0
                  }}
                />
              </div>
            </div>            
      </div>
      </div>

      
    </div>
  )
}