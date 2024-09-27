import { Router } from 'express';
import {
    createProduct,
    getProduct,
    updateProduct,
    getProductByNumber,
    deleteProductByNumber

} from '../controllers/ProductController.js';

const router =Router();

router.post('/p', createProduct);
router.get('/p', getProduct);
router.get('/p/:ProductNumber', getProductByNumber);
router.put('/p/:ProductNumber', updateProduct);
router.delete('/p/:ProductNumber', deleteProductByNumber);

export default router;