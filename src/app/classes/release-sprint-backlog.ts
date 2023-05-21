export class ReleaseSprintBAcklog {
    releaseSprintBacklogId: number
    releaseSprintId: {
        releaseSprintId:number,
        sprintName: string,
        releaseId: {
            releaseId: number,
            releaseName: string,
            projectId: number
        },
        startDate: Date,
        endDate: Date,
        totalEstimatedStoryPoint: number
    }
    backlogItemParentChildId: {
        backolgItemParentChildId: number,
        backlogItemParentId: {
            backlogItemId: number,
            backlogName: string,
            backlogTypeId: {
                backlogTypeId: number,
                backlogTypeName: string
            },
            projectId: {
                projectId: number,
                projectName: string,
                companyName: string,
                createdOn: Date,
                createdBy: {
                    userId: number,
                    userFirstName: string,
                    userlastName: string,
                    emailId: string,
                    password: string,
                    contactNumber: string,
                companyName: null,
                    countrycode: string
                }
            },
            who: {
                projectUserRoleId: number,
                projectId: {
                    projectId: number,
                    projectName: string,
                    companyName: string
                    createdOn: Date,
                    createdBy: {
                        userId: number,
                        userFirstName: string,
                        userlastName: string,
                        emailId: string,
                        password: string,
                        contactNumber: string,
                        companyName: null,
                        countrycode: string
                    }
                },
                userId: {
                    userId: number,
                    userFirstName: string,
                    userlastName: string,
                    emailId: string,
                    password: string,
                    contactNumber: string,
                    companyName: null,
                    countrycode: string
                },
                roleId: {
                    roleId: number,
                    roleName: string
                }
            },
            what: null,
            benefits: null,
            acceptenceCriteria: null,
            description: null
        },
        backlogItemChildId: {
            backlogItemId: number,
            backlogName: string,
            backlogTypeId: {
                backlogTypeId: number,
                backlogTypeName: string
            },
            projectId: {
                projectId: number,
                projectName: string,
                companyName: string,
                createdOn:Date,
                createdBy: {
                    userId: number,
                    userFirstName: string,
                    userlastName: string,
                    emailId: string,
                    password:string,
                    contactNumber: string,
                    companyName: null,
                    countrycode: string
                }
            },
            who: {
                projectUserRoleId: number,
                projectId: {
                    projectId: number,
                    projectName: string,
                    companyName:string,
                    createdOn: Date,
                    createdBy: {
                        userId: number,
                        userFirstName: string,
                        userlastName: string,
                        emailId: string,
                        password: string,
                        contactNumber: string,
                        companyName: null,
                        countrycode: string
                    }
                },
                userId: {
                    userId: number,
                    userFirstName: string,
                    userlastName: string,
                    emailId: string,
                    password:string,
                    contactNumber: string,
                    companyName: null,
                    countrycode: string
                },
                roleId: {
                    roleId: number,
                    roleName: string
                }
            },
            what: null,
            benefits: null,
            acceptenceCriteria: null,
            description: null
        },
        status: {
            statusId: number,
            statusName: string,
            sequence: number
        }
    }
    estimateStoryPoint: number
    assignedTo: {
        projectUserRoleId: number,
        projectId: {
            projectId: number,
            projectName: string,
            companyName: string,
            createdOn: Date,
            createdBy: {
                userId: number,
                userFirstName: string,
                userlastName: string,
                emailId: string,
                password: string,
                contactNumber: string,
                companyName: null,
                countrycode: string
            }
        }
        userId: {
            userId: number,
            userFirstName:string,
            userlastName: string,
            emailId: string,
            password: string,
            contactNumber: string,
            companyName: null,
            countrycode: string
        },
        roleId: {
            roleId: number,
            roleName: string
        }
    }
    status: {
        statusId: number,
        statusName: string,
        sequence: number
    }
}
    


