import HeaderEstetica from "../../components/HeaderEstetica";

export default function Agendamento() {
    return (
        <div className="bg-light">

            <HeaderEstetica />



            <div>

                <h2 className="d-flex justify-content-center p-4"> Agendamento </h2>


            </div>

            <div className="container p-3">

            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Nome do cliente</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nome do cliente aqui"></input>
</div>

<div className="mb-3">Selecione o procedimento a ser realizado no cliente</div>


                <select className="form-select mb-3"  aria-label="Default select example">
                    <option selected>Selecione uma opção</option>
                    <option value="1">Preenchimento Labial</option>
                    <option value="2">Botox</option>
                    <option value="3">Lifting Facial</option>
                    <option value="4">Harmonizzação Facial</option>
                </select>

                <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Data do procedimento</label>
  <input type="date" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
</div>


<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Horário do procedimento</label>
  <input type="time" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
</div>

<div className="mb-3">Doutor(a)</div>


                <select className="form-select mb-3"  aria-label="Default select example">
                    <option selected>Selecione uma opção</option>
                    <option value="1">Janaina Pasqualli</option>
                    <option value="2">Vilma Borges</option>
                    <option value="3">Acelio Lima</option>
                    <option value="4">Renata Giovanir</option>
                </select>
 

<button type="submit" className="btn btn-primary mt-4">Cadastrar</button>
            </div>



        </div>
    )
}