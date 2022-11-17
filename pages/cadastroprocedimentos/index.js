import HeaderEstetica from "../../components/HeaderEstetica"

export default function Procedimentos() {
    return (
        <div className="bg-light">
            <HeaderEstetica />

            <div>

                <h2 className="d-flex justify-content-center p-4">Cadastro de procedimentos</h2>


            </div>

            <div className="container p-3">


                <div className="mb-3">Selecione qual o procedimento a ser realizado</div>


                <select className="form-select mb-3"  aria-label="Default select example">
                    <option selected>Selecione uma opção</option>
                    <option value="1">Preenchimento Labial</option>
                    <option value="2">Botox</option>
                    <option value="3">Lifting Facial</option>
                    <option value="4">Harmonizzação Facial</option>
                </select>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Valor do Procedimento</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Descrição do procedimento</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Duração do procedimento:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Duração do procedimento"></input>
                </div>

                <button type="submit" className="btn btn-primary mt-4">Cadastrar</button>

            </div>






        </div>
    )
}