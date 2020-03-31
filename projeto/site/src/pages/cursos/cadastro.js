import React, { Component } from 'react';
import CursoForm from './form';
import { CursosLista } from './list';

import axios from 'axios'

const URL = 'http://localhost:3200/api/cursos'


export default class CursoCadastro extends Component {

  initialState = {
    _id: '',
    codigo: 0,
    descricao: '',
    cargaHoraria: 0,
    preco: 0,
    categoria: 'INFORMATICA'
  }

  state = { ...this.initialState, cursos: [] }

  componentDidMount() {
    this.listarCursos();
  }

  listarCursos = async () => {
    try {
      const response = await axios.get(URL);
      this.setState({ cursos: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  setCodigo(e) {
    this.setState({ codigo: e.target.value });
  }

  setDescricao(e) {
    this.setState({ descricao: e.target.value });
  }

  setCargaHoraria(e) {
    this.setState({ cargaHoraria: e.target.value });
  }

  setPreco(e) {
    this.setState({ preco: e.target.value });
  }

  setCategoria(e) {
    this.setState({ categoria: e.target.value });
  }

  limpar(e) {
    if (e !== null && e !== undefined) {
      e.preventDefault();
    }

    this.setState(this.initialState);
  }

  adicionar = async (e) => {
    if (e !== null && e !== undefined) {
      e.preventDefault();
    }

    const { _id, codigo, descricao, cargaHoraria, preco, categoria } = this.state;

    if (codigo === 0 || codigo === undefined
      || descricao === '' || descricao === undefined
      || cargaHoraria === 0 || cargaHoraria === undefined
      || preco === 0 || preco === undefined
      || categoria === '' || categoria === undefined) {

      alert('favor preencher todos os campos.');
      return;
    }

    if (cargaHoraria < 4) {
      alert('carga horária não pode ser menor que 4.');
      return;
    }

    if (preco < 0) {
      alert('preço não pode ser menor que zero.');
      return;
    }

    try {
      let msg = ''
      if (_id && _id !== '') {
        await axios.put(URL + '/' + _id, { _id, codigo, descricao, cargaHoraria, preco, categoria });
        msg = 'Curso atualizado com sucesso.';
      } else {
        await axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria });
        msg = 'Curso cadastrado com sucesso.';
      }

      this.limpar();
      await this.listarCursos();
      alert(msg);
    } catch (error) {
      console.log(error);

      let msgErro
      if (_id && _id !== '') {
        msgErro = 'atualizar';
      } else {
        msgErro = 'cadastrar';
      }

      alert(`Ocorreu erro ao ${msgErro} Curso, tente novamente ou entre em contato.`);
    }
  }

  deletar = async (_id) => {
    try {
      if (window.confirm('Deseja realmente deletar o curso?')) {
        await axios.delete(URL + '/' + _id);
        await this.listarCursos();

      }
    } catch (error) {
      console.log(error);
      alert('Ocorreu erro ao deletar Curso, tente novamente ou entre em contato.');
    }
    alert('Curso deletado com sucesso.');
  }

  editar(curso) {
    this.setState({
      _id: curso._id,
      codigo: curso.codigo,
      descricao: curso.descricao,
      cargaHoraria: curso.cargaHoraria,
      preco: curso.preco,
      categoria: curso.categoria
    });
  }

  render() {
    return (
      <div className="row border-bottom">
        <div className="col-md-6">
          <CursoForm
            codigo={this.state.codigo}
            descricao={this.state.descricao}
            cargaHoraria={this.state.cargaHoraria}
            preco={this.state.preco}
            categoria={this.state.categoria}
            isAtualizacao={this.state._id && this.state._id !== '' ? true : false}

            setCodigo={this.setCodigo.bind(this)}
            setDescricao={this.setDescricao.bind(this)}
            setCargaHoraria={this.setCargaHoraria.bind(this)}
            setPreco={this.setPreco.bind(this)}
            setCategoria={this.setCategoria.bind(this)}

            limpar={this.limpar.bind(this)}
            adicionar={this.adicionar.bind(this)}

          />
        </div>
        <div className="col-md-6">
          <CursosLista
            cursos={this.state.cursos}

            deletar={this.deletar.bind(this)}
            editar={this.editar.bind(this)}
          />
        </div>
      </div>
    );
  }
}








