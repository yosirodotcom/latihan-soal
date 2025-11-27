import { RawDataBlock } from './data_types';

// Import SD Data (Semester 1)
import { DATA_SD_1_SEM_1_MATEMATIKA } from './data_source_sd_1_sem_1_matematika';
import { DATA_SD_1_SEM_1_BINDO } from './data_source_sd_1_sem_1_bindo';
import { DATA_SD_2_SEM_1_PANCASILA } from './data_source_sd_2_sem_1_pancasila';
import { DATA_SD_3_SEM_1_IPAS } from './data_source_sd_3_sem_1_ipas';
import { DATA_SD_4_SEM_1_MATEMATIKA } from './data_source_sd_4_sem_1_matematika';
import { DATA_SD_5_SEM_1_IPAS } from './data_source_sd_5_sem_1_ipas';
import { DATA_SD_6_SEM_1_PPKN } from './data_source_sd_6_sem_1_ppkn';

// Import NEW SD Grade 3, Semester 1 Data
import { DATA_SD_3_SEM_1_MATEMATIKA } from './data_source_sd_3_sem_1_matematika';
import { DATA_SD_3_SEM_1_BINDO } from './data_source_sd_3_sem_1_bindo';
import { DATA_SD_3_SEM_1_INGGRIS } from './data_source_sd_3_sem_1_inggris';
import { DATA_SD_3_SEM_1_SENI } from './data_source_sd_3_sem_1_seni';
import { DATA_SD_3_SEM_1_PAI } from './data_source_sd_3_sem_1_pai';
import { DATA_SD_3_SEM_1_TIK } from './data_source_sd_3_sem_1_tik';
import { DATA_SD_3_SEM_1_PJOK } from './data_source_sd_3_sem_1_pjok';


// Import SD Data (Semester 2 Examples)
import { DATA_SD_1_SEM_2_MATEMATIKA } from './data_source_sd_1_sem_2_matematika';

// Import NEW SD Grade 3, Semester 2 Data
import { DATA_SD_3_SEM_2_IPAS } from './data_source_sd_3_sem_2_ipas';
import { DATA_SD_3_SEM_2_MATEMATIKA } from './data_source_sd_3_sem_2_matematika';
import { DATA_SD_3_SEM_2_BINDO } from './data_source_sd_3_sem_2_bindo';
import { DATA_SD_3_SEM_2_INGGRIS } from './data_source_sd_3_sem_2_inggris';
import { DATA_SD_3_SEM_2_SENI } from './data_source_sd_3_sem_2_seni';
import { DATA_SD_3_SEM_2_PAI } from './data_source_sd_3_sem_2_pai';
import { DATA_SD_3_SEM_2_TIK } from './data_source_sd_3_sem_2_tik';
import { DATA_SD_3_SEM_2_PJOK } from './data_source_sd_3_sem_2_pjok';


// Import SMP Data (Semester 1)
import { DATA_SMP_7_SEM_1_IPA } from './data_source_smp_7_sem_1_ipa';
import { DATA_SMP_8_SEM_1_MATEMATIKA } from './data_source_smp_8_sem_1_matematika';
import { DATA_SMP_9_SEM_1_INGGRIS } from './data_source_smp_9_sem_1_inggris';

// Import SMP Data (Semester 2 Examples)
import { DATA_SMP_7_SEM_2_IPA } from './data_source_smp_7_sem_2_ipa';

// Import SMA Data (Semester 1)
import { DATA_SMA_10_SEM_1_FISIKA } from './data_source_sma_10_sem_1_fisika';
import { DATA_SMA_11_SEM_1_BIOLOGI } from './data_source_sma_11_sem_1_biologi';
import { DATA_SMA_12_SEM_1_EKONOMI } from './data_source_sma_12_sem_1_ekonomi';

// Import SMA Data (Semester 2 Examples)
import { DATA_SMA_10_SEM_2_FISIKA } from './data_source_sma_10_sem_2_fisika';

export const RAW_DATA: RawDataBlock[] = [
    // SD Sem 1
    ...DATA_SD_1_SEM_1_MATEMATIKA,
    ...DATA_SD_1_SEM_1_BINDO,
    ...DATA_SD_2_SEM_1_PANCASILA,
    ...DATA_SD_3_SEM_1_IPAS, // Existing IPAS for SD 3 Sem 1
    ...DATA_SD_4_SEM_1_MATEMATIKA,
    ...DATA_SD_5_SEM_1_IPAS,
    ...DATA_SD_6_SEM_1_PPKN,
    
    // NEW SD Grade 3 Sem 1 Data
    ...DATA_SD_3_SEM_1_MATEMATIKA,
    ...DATA_SD_3_SEM_1_BINDO,
    ...DATA_SD_3_SEM_1_INGGRIS,
    ...DATA_SD_3_SEM_1_SENI,
    ...DATA_SD_3_SEM_1_PAI,
    ...DATA_SD_3_SEM_1_TIK,
    ...DATA_SD_3_SEM_1_PJOK,

    // SD Sem 2
    ...DATA_SD_1_SEM_2_MATEMATIKA,
    
    // NEW SD Grade 3 Sem 2 Data
    ...DATA_SD_3_SEM_2_IPAS,
    ...DATA_SD_3_SEM_2_MATEMATIKA,
    ...DATA_SD_3_SEM_2_BINDO,
    ...DATA_SD_3_SEM_2_INGGRIS,
    ...DATA_SD_3_SEM_2_SENI,
    ...DATA_SD_3_SEM_2_PAI,
    ...DATA_SD_3_SEM_2_TIK,
    ...DATA_SD_3_SEM_2_PJOK,


    // SMP Sem 1
    ...DATA_SMP_7_SEM_1_IPA,
    ...DATA_SMP_8_SEM_1_MATEMATIKA,
    ...DATA_SMP_9_SEM_1_INGGRIS,
    
    // SMP Sem 2
    ...DATA_SMP_7_SEM_2_IPA,

    // SMA Sem 1
    ...DATA_SMA_10_SEM_1_FISIKA,
    ...DATA_SMA_11_SEM_1_BIOLOGI,
    ...DATA_SMA_12_SEM_1_EKONOMI,

    // SMA Sem 2
    ...DATA_SMA_10_SEM_2_FISIKA
];