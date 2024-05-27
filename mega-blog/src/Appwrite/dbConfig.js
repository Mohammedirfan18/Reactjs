import { Client, Databases,ID ,Storage} from "appwrite";
import conf from '../conf/config'

export class Dbservice{
    client=new Client();;
    databases;
    storage;
    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
    async createDocument({title,slug,content,featuredImage,status,userId})
    {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
            
        } catch (error) {
            console.log("Appwrite create document :: error",error);
        }
    }
    async updateDocument(slug,{title,content,featuredImage,status})
    {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,  
                }
            )
        } catch (error) {
            console.log("Appwrite update document :: error",error);
            
        }
    }
    async deleteDocument(slug)
    {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite delete document :: error",error);
            return false;
        }
    }
    async getDocument(slug)
    {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            
        } catch (error) {
            console.log("Appwrite get document :: error",error);
            return false;
        }
    }
    async getDocuments(queries = [Query.equals("status","active")])
    {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
            
        } catch (error) {
            console.log("Appwrite delete document :: error",error);
            return false;
        }
    }

    //file upload
    async uploadFile(file)
    {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite upload file :: error",error);
            return false;
        }
    }
    async deleteFile(fileId)
    {
        try {
             await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite upload file :: error",error);
            return false;
        }
    }
    getFilePreview(fileId)
    {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const dbService = new Dbservice();

export default dbService;