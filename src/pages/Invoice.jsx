import React from 'react';
import InvoiceBanner from '../components/screen/Invoice/InvoiceBanner';
import InvoiceTable from '../components/screen/Invoice/InvoiceTable';

const Invoice = () => {
    return (
        <>
            <InvoiceBanner/>
            <InvoiceTable/>
        </>
    );
};

export default Invoice;