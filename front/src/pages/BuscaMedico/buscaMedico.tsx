import { useState, useEffect } from 'react';
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import MedicoTable from "../../components/tables/MedicoTable/MedicoTable";

interface Medico {
  id: number;
  nome: string;
  crm: string;
  especialidade: string;
  situacao: 'regular' | 'transferido' | 'inativo' | 'cancelado';
}

const medicosMock: Medico[] = [
  { id: 1, nome: 'Dr. João Silva', crm: '12345-SP', especialidade: 'Cardiologia', situacao: 'regular' },
  { id: 2, nome: 'Dra. Maria Souza', crm: '67890-RJ', especialidade: 'Pediatria', situacao: 'regular' },
  { id: 3, nome: 'Dr. Pedro Santos', crm: '11223-MG', especialidade: 'Dermatologia', situacao: 'transferido' },
  { id: 4, nome: 'Dra. Ana Costa', crm: '44556-PR', especialidade: 'Oftalmologia', situacao: 'inativo' },
  { id: 5, nome: 'Dr. Carlos Oliveira', crm: '77889-BA', especialidade: 'Neurologia', situacao: 'regular' },
  { id: 6, nome: 'Dra. Sofia Pereira', crm: '99887-SC', especialidade: 'Ginecologia', situacao: 'cancelado' },
  { id: 7, nome: 'Dr. Lucas Fernandes', crm: '66554-RS', especialidade: 'Ortopedia', situacao: 'regular' },
  { id: 8, nome: 'Dra. Laura Almeida', crm: '33221-DF', especialidade: 'Endocrinologia', situacao: 'regular' },
];

export default function BuscaMedico() {
  const [nomeBusca, setNomeBusca] = useState('');
  const [crmBusca, setCrmBusca] = useState('');
  const [situacaoBusca, setSituacaoBusca] = useState('');
  const [resultados, setResultados] = useState<Medico[]>([]);

  // Funções auxiliares para busca por similaridade
  const searchByName = (medico: Medico, searchTerm: string) =>
    medico.nome.toLowerCase().includes(searchTerm.toLowerCase());

  const searchByCrm = (medico: Medico, searchTerm: string) =>
    medico.crm.toLowerCase().includes(searchTerm.toLowerCase());

  useEffect(() => {
    const filtrarMedicos = () => {
      const medicosFiltrados = medicosMock.filter(medico => {
        const nomeMatch = nomeBusca === '' || searchByName(medico, nomeBusca);
        const crmMatch = crmBusca === '' || searchByCrm(medico, crmBusca);
        const situacaoMatch = situacaoBusca === '' || medico.situacao === situacaoBusca;

        // Se nenhum filtro estiver ativo, retorna todos os médicos.
        // Caso contrário, aplica os filtros.
        if (nomeBusca === '' && crmBusca === '' && situacaoBusca === '') {
          return true;
        }
        return nomeMatch && crmMatch && situacaoMatch;
      });
      setResultados(medicosFiltrados);
    };

    filtrarMedicos();
  }, [nomeBusca, crmBusca, situacaoBusca]);

  return (
    <>
      <PageMeta
        title="Buscar Médico | TailAdmin - React.js Admin Dashboard Template"
        description="Página de busca de médicos para TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Buscar Médico" />
      <div className="space-y-6">
        <ComponentCard title="Tabela de Médicos">
          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
            <div>
              <label htmlFor="nomeBusca" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Buscar médico pelo nome:
              </label>
              <input
                type="text"
                id="nomeBusca"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Digite o nome do médico"
                value={nomeBusca}
                onChange={(e) => setNomeBusca(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="crmBusca" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Buscar médico pelo CRM:
              </label>
              <input
                type="text"
                id="crmBusca"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Digite o CRM do médico"
                value={crmBusca}
                onChange={(e) => setCrmBusca(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="situacaoBusca" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Filtrar por situação:
              </label>
              <select
                id="situacaoBusca"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={situacaoBusca}
                onChange={(e) => setSituacaoBusca(e.target.value)}
              >
                <option value="">Todas</option>
                <option value="regular">Regular</option>
                <option value="transferido">Transferido</option>
                <option value="inativo">Inativo</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </div>
          </div>
          <MedicoTable medicos={resultados} />
        </ComponentCard>
      </div>
    </>
  );
}