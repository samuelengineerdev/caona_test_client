import React, { useEffect, useState } from "react";
import clientService from "../services/client.service";
import AlertComponent from "../../../components/Alert/Alert";
import CustomModal from "../../../components/CustomModal/CustomModal";
import CustomForm from "../../../components/CustomForm/CustomForm";
import InputLayout from "../../../layouts/InputLayout";
import { CustomInput, CustomSelect } from "../../../components/CustomFields/CustomFields";
import CustomFormSubtitle from "../../../components/FormComponents/CustomFormSubtitle";


function ClientForm({ isOpen, handleOpen, clientId }) {
  const [formData, setFormData] = useState({});
  const [alertInfo, setAlertInfo] = useState({ openAlert: false });
  const [isSending, setIsSending] = useState(false);

  const setFormInfo = async () => {
    if (!clientId) return;
    const data = await clientService.view({id: clientId});
    if (data.status) {
      setFormData(data.client);
    }
  };

  useEffect(() => {
    setFormData({})
    if (clientId) setFormInfo();
  }, [isOpen]);

  const handleOpenAlertComponent = (props) => {
    setAlertInfo((prevAlertInfo) => ({
      ...props,
      openAlert: !prevAlertInfo.openAlert,
    }));
  };

  const saveClient = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const mode = clientId ? "update" : "store";
    const data = await clientService[mode](formData);
    if (data.status) {
      handleOpen();
    } else {
      handleOpenAlertComponent({
        message: data.message,
        title: "Error",
        mode: "DANGER",
        event: "INFO",
      });
    }
    setIsSending(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");
    const updateNestedState = (data, parts, value) => {
      const [currentPart, ...remainingParts] = parts;
      if (!remainingParts.length) {
        return { ...data, [currentPart]: value };
      }
      return {
        ...data,
        [currentPart]: updateNestedState(data[currentPart] || {}, remainingParts, value),
      };
    };
    setFormData((prevData) => updateNestedState(prevData, nameParts, value));
  };

  const civilStatuses = [
    {name: "Single"},
    {name: "Married"},
  ]

  const membershipLevels = [
    {name: "Basic"},
    {name: "Silver"},
    {name: "Gold"},
    {name: "Platinum"},
  ]

  return (
    <>
     <CustomModal isOpen={isOpen} title={clientId ? "Update Client" : "New Client"} size="2xl" onClose={handleOpen}>
      <CustomForm buttonName="Save" onSubmit={saveClient} isSending={isSending}>
        <CustomFormSubtitle Title="Client" />
        <InputLayout className="" items={3}>
          <CustomInput name="first_name" label="First Name *" color="purple" handleChange={handleChange} value={formData?.first_name}/>
          <CustomInput name="last_name" label="Last Name" color="purple" handleChange={handleChange}  value={formData?.last_name}/>
          <CustomInput name="email" label="Email" color="purple" handleChange={handleChange} value={formData?.email} />
          <CustomInput name="phone" label="Phone *" type="number" color="purple" handleChange={handleChange} value={formData?.phone} />
        </InputLayout>
        <CustomFormSubtitle containerClass="" Title="Profile" />
        <InputLayout className="" items={3}>
          <CustomSelect name="profile.civil_status" label="Civil Status" color="purple" handleChange={handleChange} itemKey={"name"} items={civilStatuses} value={formData?.profile?.civil_status} />
          <CustomSelect name="profile.membership_level" label="Membership Level" color="purple" handleChange={handleChange} itemKey={"name"} items={membershipLevels} value={formData?.profile?.membership_level} />
          <CustomInput name="profile.occupation" label="Occupation" color="purple" handleChange={handleChange}  value={formData?.profile?.occupation} />
        </InputLayout>
        <CustomFormSubtitle containerClass="" Title="Address" />
        <InputLayout items={3}>
          <CustomInput name="address.street" label="street" color="purple" handleChange={handleChange} value={formData?.address?.street} />
          <CustomInput name="address.city" label="city" color="purple" handleChange={handleChange} value={formData?.address?.city} />
          <CustomInput name="address.state" label="State" color="purple" handleChange={handleChange} value={formData?.address?.state} />
          <CustomInput name="address.postal_code" label="Postal Code" color="purple" handleChange={handleChange} value={formData?.address?.postal_code} />
        </InputLayout>
      </CustomForm>
      </CustomModal>
    
      <AlertComponent alertInfo={alertInfo} handleOpenAlertComponent={handleOpenAlertComponent} />
    </>
  );
}

export default ClientForm;
