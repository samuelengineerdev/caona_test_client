import React, { useEffect, useState } from "react";
import clientService from "./services/client.service";
import ClientForm from "./components/ClientForm";
import CustomTable from "../../components/CustomTable/CustomTable";
import AlertComponent from "../../components/Alert/Alert";

const ProductCategories = () => {
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState("");
  const [alertInfo, setAlertInfo] = useState({ openAlert: false });

  const getClients = async () => {
    const data = await clientService.get();
    if (data.status) {
      setClients(data.clients);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  const TABLE_HEAD = [
    { name: "First ame", key: "first_name" },
    { name: "Last Name", key: "last_name" },
    { name: "Email", key: "client_email" },
    { name: "Phone", key: "phone" },
    { name: "Civil Status", key: "profile.civil_status" },
    { name: "Occupation", key: "profile.occupation" },
    { name: "Menbership Level", key: "profile.membership_level" },
    { name: "Street", key: "address.street" },
    { name: "City", key: "address.city" },
    { name: "State", key: "address.state" },
    { name: "Postal Code", key: "address.postal_code" },
    { name: "Actions", key: "actions" },
  ];

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleFormModalOpen = () => {
    setIsFormModalOpen((prevState) => {
      if (prevState) {
        setClientId("");
        getClients();
      }
      return !prevState;
    });
  };

  const handleOpenAlertComponent = (props) => {
    setAlertInfo((prevAlertInfo) => ({
      ...props,
      openAlert: !prevAlertInfo.openAlert,
    }));
  };

  const handleOnUpdate = (id) => {
    setClientId(id);
    handleFormModalOpen();
  };

  const deleleClient = async ({ id }) => {
    const data = await clientService.delete({id});
    console.log(data)
    if (data.status) {
      getClients();
    } else {
      handleOpenAlertComponent({
        message: data.message,
        title: "Error",
        mode: "DANGER",
        event: "INFO",
      });
    }
  };

  const handleOnDelete = async (id) => {
    handleOpenAlertComponent({
      message: "Are you sure to delete this category",
      title: "Alert",
      mode: "DANGER",
      id,
      event: "DELETE",
      onConfirm: deleleClient,
    });
  };

  return (
    <div className="p-5">
      <div className=" overflow-x-auto mt-5">
        <CustomTable
          tableName={"Clients Manager"}
          TABLE_HEAD={TABLE_HEAD}
          items={clients}
          pagination={true}
          itemsPerPage={7}
          controls={true}
          onUpdate={handleOnUpdate}
          onDelete={handleOnDelete}
          handleFormModalOpen={handleFormModalOpen}
        />
      </div>
      <ClientForm isOpen={isFormModalOpen} handleOpen={handleFormModalOpen} clientId={clientId} />
      <AlertComponent alertInfo={alertInfo} handleOpenAlertComponent={handleOpenAlertComponent} />
    </div>
  );
};

export default ProductCategories;