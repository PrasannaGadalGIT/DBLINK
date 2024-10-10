import { useState } from 'react';
import { IconTrash } from '@tabler/icons-react';
import AppModal from '../ui/AppModal'; // Ensure the path is correct
import { useCluster } from './cluster-data-access';

export function ClusterUiTable() {
  const { clusters, setCluster, deleteCluster } = useCluster();
  const [clusterToDelete, setClusterToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteCluster = (cluster) => {
    setClusterToDelete(cluster);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (clusterToDelete) {
      deleteCluster(clusterToDelete);
      setClusterToDelete(null);
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table border-4 border-separate border-base-300">
        <thead>
          <tr>
            <th>Name / Network / Endpoint</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clusters.map((item) => (
            <tr key={item.name} className={item?.active ? 'bg-base-200' : ''}>
              <td className="space-y-2">
                <div className="whitespace-nowrap space-x-2">
                  <span className="text-xl">
                    {item?.active ? (
                      item.name
                    ) : (
                      <button
                        title="Select cluster"
                        className="link link-secondary"
                        onClick={() => setCluster(item)}
                      >
                        {item.name}
                      </button>
                    )}
                  </span>
                </div>
                <span className="text-xs">Network: {item.network ?? 'custom'}</span>
                <div className="whitespace-nowrap text-gray-500 text-xs">{item.endpoint}</div>
              </td>
              <td className="space-x-2 whitespace-nowrap text-center">
                <button
                  disabled={item?.active}
                  className="btn btn-xs btn-default btn-outline"
                  onClick={() => handleDeleteCluster(item)}
                >
                  <IconTrash size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <AppModal
          title="Confirm Delete"
          show={showDeleteModal}
          hide={() => setShowDeleteModal(false)}
          submit={confirmDelete}
          submitLabel="Delete"
        >
          <p>Are you sure you want to delete the cluster <strong>{clusterToDelete?.name}</strong>?</p>
        </AppModal>
      )}
    </div>
  );
}
