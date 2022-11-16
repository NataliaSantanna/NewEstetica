import HeaderEstetica from "../../components/HeaderEstetica"

export default function CadastroClientes() {
    return (
        <div className="bg-light">
            <HeaderEstetica />

            <div className="d-flex justify-content-center p-4">

                <h2>Cadastro de Clientes</h2>

            </div>


            <div className="container p-3">


                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nome do cliente</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="nome do cliente" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Idade</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="idade do cliente" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email do cliente" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Telefone</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="telefone do cliente" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">CPF</label>
                    <input type="text" maxLength={14} className="form-control" id="exampleFormControlInput1" placeholder="CPF do cliente" />
                </div>

                <button type="submit" className="btn btn-primary mt-4">Cadastrar</button>

            </div>
        </div>
    )
}